import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.task import Task  # noqa: E501
from openapi_server import util


def get_task(authorization, task_id):  # noqa: E501
    """get specific task

    get specific task # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param task_id: ID of Task
    :type task_id: str

    :rtype: Union[Task, Tuple[Task, int], Tuple[Task, int, Dict[str, str]]
    """
    return 'do some magic!'


def new_task(authorization, task=None):  # noqa: E501
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
    return 'do some magic!'


def patch_task(authorization, task_id, task=None):  # noqa: E501
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
