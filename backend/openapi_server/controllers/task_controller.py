import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.task import Task  # noqa: E501
from openapi_server import util
from db.models import *

def get_task(authorization, task_id, token_info = None):  # noqa: E501
    """get specific task

    get specific task # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param task_id: ID of Task
    :type task_id: str

    :rtype: Union[Task, Tuple[Task, int], Tuple[Task, int, Dict[str, str]]
    """
    return 'do some magic!'


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
        task.user_id = str(token_info['uuid'])
        dbtask.userId = task.user_id
        dbtask.title = task.title
        dbtask.type = task.type
        dbtask.start = task.start
        dbtask.end = task.end
        dbtask.deadline = task.deadline
        dbtask.est = task.est
        dbtask.actualTime = 0
        dbtask.description = task.description
        dbtask.done = False
        session.add(dbtask)
        session.commit()
        task.uuid = dbtask.uuid
        return task
    return None, 401


def patch_task(authorization, task_id, task=None, token_info = None):  # noqa: E501
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
    return 'do some magic!'
