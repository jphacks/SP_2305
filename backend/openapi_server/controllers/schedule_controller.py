import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.schedule import Schedule  # noqa: E501
from openapi_server import util


def get_schedule(authorization, schedule_id):  # noqa: E501
    """get user schedules

    get users schedules # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param schedule_id: ID of user
    :type schedule_id: str

    :rtype: Union[List[Schedule], Tuple[List[Schedule], int], Tuple[List[Schedule], int, Dict[str, str]]
    """
    return 'do some magic!'


def new_scheudle(authorization, schedule=None):  # noqa: E501
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
    return 'do some magic!'


def patch_schedule(authorization, schedule_id, schedule=None):  # noqa: E501
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
    return 'do some magic!'
