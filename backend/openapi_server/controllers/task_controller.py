import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.task import Task  # noqa: E501
from openapi_server import util
from db.models import *

def get_task(authorization = None, task_id = None, token_info = None):  # noqa: E501
    """get specific task

    get specific task # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param task_id: ID of Task
    :type task_id: str

    :rtype: Union[Task, Tuple[Task, int], Tuple[Task, int, Dict[str, str]]
    """
    session = Session()
    
    if session.query(exists().where(DBTask.uuid == task_id)).scalar() > 0:
        print("GETTask")
        dbtask = session.query(DBTask).filter(DBTask.uuid == task_id).first()
        if token_info['permission'] != 'Admin' and dbtask.userId != token_info['uuid']:
            return None, 401
        print(dbtask)
        return dbtask.to_task()
    return None, 400


def new_task(authorization=None, task=None, token_info = None):  # noqa: E501
    """create new task

    create new task # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param task: 
    :type task: dict | bytes

    :rtype: Union[Task, Tuple[Task, int], Tuple[Task, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        task = Task.from_dict(connexion.request.get_json())  # noqa: E501
    session = Session()
    print(token_info)
    if session.query(exists().where(DBUser.uuid == token_info['uuid'])).scalar() > 0:
        dbtask = DBTask()
        task.user_id = token_info['uuid']
        dbtask.from_task(task)
        session.add(dbtask)
        session.commit()
        task.uuid = dbtask.uuid
        return task
    return None, 401


def patch_task(authorization = None, task_id = None, task=None, token_info = None):  # noqa: E501
    """get specific task

    get specific task # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param task_id: ID of Task
    :type task_id: str
    :param task: 
    :type task: dict | bytes

    :rtype: Union[Task, Tuple[Task, int], Tuple[Task, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        task = Task.from_dict(connexion.request.get_json())  # noqa: E501
    session = Session()
    if session.query(exists().where(DBTask.uuid == task_id)).scalar() > 0:
        dbtask = session.query(DBTask).filter(DBTask.uuid == task_id).first()
        if token_info['permission'] != 'Admin' and dbtask.userId != token_info['uuid']:
            return None, 401
        task.uuid = task_id
        dbtask.from_task(task)
        session.commit()
        return dbtask.to_task()
    return None, 400
