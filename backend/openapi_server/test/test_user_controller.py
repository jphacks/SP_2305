# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.new_user_request import NewUserRequest  # noqa: E501
from openapi_server.models.schedule import Schedule  # noqa: E501
from openapi_server.models.task import Task  # noqa: E501
from openapi_server.models.todo import Todo  # noqa: E501
from openapi_server.models.user import User  # noqa: E501
from openapi_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_get_user_schedules(self):
        """Test case for get_user_schedules

        get user schedules
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/v0/user/{user_id}/schedules'.format(user_id='user_id_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user_tasks(self):
        """Test case for get_user_tasks

        get user tasks
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/v0/user/{user_id}/tasks'.format(user_id='user_id_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user_todo(self):
        """Test case for get_user_todo

        get user's todo
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/v0/user{userId}/todo'.format(user_id='user_id_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_new_user(self):
        """Test case for new_user

        Register new user
        """
        new_user_request = openapi_server.NewUserRequest()
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'authorization_example',
        }
        response = self.client.open(
            '/api/v0/user',
            method='POST',
            headers=headers,
            data=json.dumps(new_user_request),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
