import bcrypt
import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.auth_user_request import AuthUserRequest  # noqa: E501
from openapi_server.models.new_user_request import NewUserRequest  # noqa: E501
from openapi_server.models.schedule import Schedule  # noqa: E501
from openapi_server.models.task import Task  # noqa: E501
from openapi_server.models.todo import Todo  # noqa: E501
from openapi_server.models.user import User  # noqa: E501
from openapi_server import util
from db.models import *

def auth_user(auth_user_request=None):  # noqa: E501
    """Auth

    Get JWT Token # noqa: E501

    :param auth_user_request: 
    :type auth_user_request: dict | bytes

    :rtype: Union[str, Tuple[str, int], Tuple[str, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        auth_user_request = AuthUserRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_user_schedules(user_id, auth_login_request=None):  # noqa: E501
    """get user schedules

    get users schedules # noqa: E501

    :param user_id: ID of user
    :type user_id: str

    :rtype: Union[List[Schedule], Tuple[List[Schedule], int], Tuple[List[Schedule], int, Dict[str, str]]
    """
    return 'do some magic!'


def get_user_tasks(user_id, auth_login_request=None):  # noqa: E501
    """get user tasks

    get users tasks # noqa: E501

    :param user_id: ID of user
    :type user_id: str

    :rtype: Union[List[Task], Tuple[List[Task], int], Tuple[List[Task], int, Dict[str, str]]
    """
    return 'do some magic!'


def get_user_todo(user_id, auth_login_request=None):  # noqa: E501
    """get user&#39;s todo

    get specific user&#39;s todo # noqa: E501

    :param user_id: ID of user
    :type user_id: str

    :rtype: Union[List[Todo], Tuple[List[Todo], int], Tuple[List[Todo], int, Dict[str, str]]
    """
    return 'do some magic!'


def new_user(authorization, new_user_request=None):  # noqa: E501
    """Register new user

    Register new user # noqa: E501

    :param authorization: bearer token
    :type authorization: str
    :param new_user_request: 
    :type new_user_request: dict | bytes

    :rtype: Union[List[User], Tuple[List[User], int], Tuple[List[User], int, Dict[str, str]]
    """
    if connexion.request.is_json:
        new_user_request = NewUserRequest.from_dict(connexion.request.get_json())  # noqa: E501
    session = Session()
    if session.query(exists().where(User.id == new_user_request.id)).scalar() > 0:
        return None, 500
    else:
        user = User()
        user.id = new_user_request.id
        user.nickname = new_user_request.nickname
        salt = bcrypt.gensalt(rounds=10, prefix=b'2a')
        user.password = bcrypt.hashpw(bytes(new_user_request.password, "utf-8"), salt).decode('utf8')
        session.add(user)
        session.commit()
        return user
    return 'do some magic!'
