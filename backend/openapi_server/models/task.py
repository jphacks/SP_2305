# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class Task(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, user_id=None, title=None, task_type=None, dead_line=None, task_est=None, task_est_unit=None, task_actual_time=None, description=None, done=None, color=None, repeat=None, task_progress=None, for_number=None, frequency_unit=None):  # noqa: E501
        """Task - a model defined in OpenAPI

        :param id: The id of this Task.  # noqa: E501
        :type id: str
        :param user_id: The user_id of this Task.  # noqa: E501
        :type user_id: str
        :param title: The title of this Task.  # noqa: E501
        :type title: str
        :param task_type: The task_type of this Task.  # noqa: E501
        :type task_type: str
        :param dead_line: The dead_line of this Task.  # noqa: E501
        :type dead_line: datetime
        :param task_est: The task_est of this Task.  # noqa: E501
        :type task_est: float
        :param task_est_unit: The task_est_unit of this Task.  # noqa: E501
        :type task_est_unit: str
        :param task_actual_time: The task_actual_time of this Task.  # noqa: E501
        :type task_actual_time: float
        :param description: The description of this Task.  # noqa: E501
        :type description: str
        :param done: The done of this Task.  # noqa: E501
        :type done: bool
        :param color: The color of this Task.  # noqa: E501
        :type color: str
        :param repeat: The repeat of this Task.  # noqa: E501
        :type repeat: float
        :param task_progress: The task_progress of this Task.  # noqa: E501
        :type task_progress: float
        :param for_number: The for_number of this Task.  # noqa: E501
        :type for_number: float
        :param frequency_unit: The frequency_unit of this Task.  # noqa: E501
        :type frequency_unit: str
        """
        self.openapi_types = {
            'id': str,
            'user_id': str,
            'title': str,
            'task_type': str,
            'dead_line': datetime,
            'task_est': float,
            'task_est_unit': str,
            'task_actual_time': float,
            'description': str,
            'done': bool,
            'color': str,
            'repeat': float,
            'task_progress': float,
            'for_number': float,
            'frequency_unit': str
        }

        self.attribute_map = {
            'id': 'id',
            'user_id': 'userId',
            'title': 'title',
            'task_type': 'taskType',
            'dead_line': 'deadLine',
            'task_est': 'taskEst',
            'task_est_unit': 'taskEstUnit',
            'task_actual_time': 'taskActualTime',
            'description': 'description',
            'done': 'done',
            'color': 'color',
            'repeat': 'repeat',
            'task_progress': 'taskProgress',
            'for_number': 'forNumber',
            'frequency_unit': 'frequencyUnit'
        }

        self._id = id
        self._user_id = user_id
        self._title = title
        self._task_type = task_type
        self._dead_line = dead_line
        self._task_est = task_est
        self._task_est_unit = task_est_unit
        self._task_actual_time = task_actual_time
        self._description = description
        self._done = done
        self._color = color
        self._repeat = repeat
        self._task_progress = task_progress
        self._for_number = for_number
        self._frequency_unit = frequency_unit

    @classmethod
    def from_dict(cls, dikt) -> 'Task':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Task of this Task.  # noqa: E501
        :rtype: Task
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this Task.


        :return: The id of this Task.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Task.


        :param id: The id of this Task.
        :type id: str
        """

        self._id = id

    @property
    def user_id(self):
        """Gets the user_id of this Task.


        :return: The user_id of this Task.
        :rtype: str
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this Task.


        :param user_id: The user_id of this Task.
        :type user_id: str
        """

        self._user_id = user_id

    @property
    def title(self):
        """Gets the title of this Task.


        :return: The title of this Task.
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this Task.


        :param title: The title of this Task.
        :type title: str
        """

        self._title = title

    @property
    def task_type(self):
        """Gets the task_type of this Task.


        :return: The task_type of this Task.
        :rtype: str
        """
        return self._task_type

    @task_type.setter
    def task_type(self, task_type):
        """Sets the task_type of this Task.


        :param task_type: The task_type of this Task.
        :type task_type: str
        """
        allowed_values = ["deadLineTrue", "deadLineFalse"]  # noqa: E501
        if task_type not in allowed_values:
            raise ValueError(
                "Invalid value for `task_type` ({0}), must be one of {1}"
                .format(task_type, allowed_values)
            )

        self._task_type = task_type

    @property
    def dead_line(self):
        """Gets the dead_line of this Task.


        :return: The dead_line of this Task.
        :rtype: datetime
        """
        return self._dead_line

    @dead_line.setter
    def dead_line(self, dead_line):
        """Sets the dead_line of this Task.


        :param dead_line: The dead_line of this Task.
        :type dead_line: datetime
        """

        self._dead_line = dead_line

    @property
    def task_est(self):
        """Gets the task_est of this Task.


        :return: The task_est of this Task.
        :rtype: float
        """
        return self._task_est

    @task_est.setter
    def task_est(self, task_est):
        """Sets the task_est of this Task.


        :param task_est: The task_est of this Task.
        :type task_est: float
        """

        self._task_est = task_est

    @property
    def task_est_unit(self):
        """Gets the task_est_unit of this Task.


        :return: The task_est_unit of this Task.
        :rtype: str
        """
        return self._task_est_unit

    @task_est_unit.setter
    def task_est_unit(self, task_est_unit):
        """Sets the task_est_unit of this Task.


        :param task_est_unit: The task_est_unit of this Task.
        :type task_est_unit: str
        """

        self._task_est_unit = task_est_unit

    @property
    def task_actual_time(self):
        """Gets the task_actual_time of this Task.


        :return: The task_actual_time of this Task.
        :rtype: float
        """
        return self._task_actual_time

    @task_actual_time.setter
    def task_actual_time(self, task_actual_time):
        """Sets the task_actual_time of this Task.


        :param task_actual_time: The task_actual_time of this Task.
        :type task_actual_time: float
        """

        self._task_actual_time = task_actual_time

    @property
    def description(self):
        """Gets the description of this Task.


        :return: The description of this Task.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Task.


        :param description: The description of this Task.
        :type description: str
        """

        self._description = description

    @property
    def done(self):
        """Gets the done of this Task.


        :return: The done of this Task.
        :rtype: bool
        """
        return self._done

    @done.setter
    def done(self, done):
        """Sets the done of this Task.


        :param done: The done of this Task.
        :type done: bool
        """

        self._done = done

    @property
    def color(self):
        """Gets the color of this Task.


        :return: The color of this Task.
        :rtype: str
        """
        return self._color

    @color.setter
    def color(self, color):
        """Sets the color of this Task.


        :param color: The color of this Task.
        :type color: str
        """

        self._color = color

    @property
    def repeat(self):
        """Gets the repeat of this Task.


        :return: The repeat of this Task.
        :rtype: float
        """
        return self._repeat

    @repeat.setter
    def repeat(self, repeat):
        """Sets the repeat of this Task.


        :param repeat: The repeat of this Task.
        :type repeat: float
        """

        self._repeat = repeat

    @property
    def task_progress(self):
        """Gets the task_progress of this Task.


        :return: The task_progress of this Task.
        :rtype: float
        """
        return self._task_progress

    @task_progress.setter
    def task_progress(self, task_progress):
        """Sets the task_progress of this Task.


        :param task_progress: The task_progress of this Task.
        :type task_progress: float
        """

        self._task_progress = task_progress

    @property
    def for_number(self):
        """Gets the for_number of this Task.

        頻度の場合何回やるか？  # noqa: E501

        :return: The for_number of this Task.
        :rtype: float
        """
        return self._for_number

    @for_number.setter
    def for_number(self, for_number):
        """Sets the for_number of this Task.

        頻度の場合何回やるか？  # noqa: E501

        :param for_number: The for_number of this Task.
        :type for_number: float
        """

        self._for_number = for_number

    @property
    def frequency_unit(self):
        """Gets the frequency_unit of this Task.


        :return: The frequency_unit of this Task.
        :rtype: str
        """
        return self._frequency_unit

    @frequency_unit.setter
    def frequency_unit(self, frequency_unit):
        """Sets the frequency_unit of this Task.


        :param frequency_unit: The frequency_unit of this Task.
        :type frequency_unit: str
        """
        allowed_values = ["week", "month", "year"]  # noqa: E501
        if frequency_unit not in allowed_values:
            raise ValueError(
                "Invalid value for `frequency_unit` ({0}), must be one of {1}"
                .format(frequency_unit, allowed_values)
            )

        self._frequency_unit = frequency_unit
