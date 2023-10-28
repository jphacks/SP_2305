# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.task import Task  # noqa: E501
from openapi_server.test import BaseTestCase


class TestTaskController(BaseTestCase):
    """TaskController integration test stubs"""

    def test_get_task(self):
        """Test case for get_task

        get specific task
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/v0/task/{task_id}'.format(task_id='task_id_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_new_task(self):
        """Test case for new_task

        create new task
        """
        task = {"actualTime":0.8008281904610115,"est":"2000-01-23T04:56:07.000+00:00","start":"2000-01-23T04:56:07.000+00:00","description":"description","end":"2000-01-23T04:56:07.000+00:00","title":"title","type":"startend","deadline":"2000-01-23T04:56:07.000+00:00","uuid":"uuid","userId":"userId","done":True}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/v0/task',
            method='POST',
            headers=headers,
            data=json.dumps(task),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_task(self):
        """Test case for patch_task

        get specific task
        """
        task = {"actualTime":0.8008281904610115,"est":"2000-01-23T04:56:07.000+00:00","start":"2000-01-23T04:56:07.000+00:00","description":"description","end":"2000-01-23T04:56:07.000+00:00","title":"title","type":"startend","deadline":"2000-01-23T04:56:07.000+00:00","uuid":"uuid","userId":"userId","done":True}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/v0/task/{task_id}'.format(task_id='task_id_example'),
            method='PATCH',
            headers=headers,
            data=json.dumps(task),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
