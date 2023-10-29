import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.schedule import Schedule  # noqa: E501
from openapi_server import util

from db.models import *


def get_schedule(authorization = None, schedule_id = None, token_info = None):  # noqa: E501
    """get user schedules

    get users schedules # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param schedule_id: ID of user
    :type schedule_id: str

    :rtype: Union[List[Schedule], Tuple[List[Schedule], int], Tuple[List[Schedule], int, Dict[str, str]]
    """
    session = Session()
    
    if session.query(exists().where(DBSchedule.uuid == schedule_id)).scalar() > 0:
        dbschedule= session.query(DBSchedule).filter(DBSchedule.uuid == schedule_id).first()
        if token_info['permission'] != 'Admin' and dbschedule.userId != token_info['uuid']:
            return None, 401
        print(dbschedule)
        return dbschedule.to_schedule()
    return None, 400


def new_scheudle(authorization = None, schedule=None, token_info = None):  # noqa: E501
    """create new schedule

    create new schedule # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param schedule: 
    :type schedule: dict | bytes

    :rtype: Union[Schedule, Tuple[Schedule, int], Tuple[Schedule, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        schedule = Schedule.from_dict(connexion.request.get_json())  # noqa: E501
    session = Session()
    print(token_info)
    if session.query(exists().where(DBUser.uuid == token_info['uuid'])).scalar() > 0:
        dbschedule = DBSchedule()
        dbschedule.user_id = token_info['uuid']
        dbschedule.from_schedule(schedule)
        session.add(dbschedule)
        session.commit()
        schedule.uuid = dbschedule.uuid
        return schedule
    return None, 401


def patch_schedule(authorization = None, schedule_id = None, schedule=None, token_info = None):  # noqa: E501
    """get user schedules

    get users schedules # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param schedule_id: ID of user
    :type schedule_id: str
    :param schedule: 
    :type schedule: dict | bytes

    :rtype: Union[List[Schedule], Tuple[List[Schedule], int], Tuple[List[Schedule], int, Dict[str, str]]
    """
    if connexion.request.is_json:
        schedule = Schedule.from_dict(connexion.request.get_json())  # noqa: E501
    session = Session()
    if session.query(exists().where(DBSchedule.uuid == schedule_id)).scalar() > 0:
        dbschedule = session.query(DBSchedule).filter(DBSchedule.uuid == schedule_id).first()
        if token_info['permission'] != 'Admin' and dbschedule.userId != token_info['uuid']:
            return None, 401
        dbschedule.uuid = schedule_id
        dbschedule.from_schedule(schedule)
        session.commit()
        return dbschedule.to_schedule()
    return None, 400
