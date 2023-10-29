# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.schedule import Schedule  # noqa: E501
from openapi_server.test import BaseTestCase


class TestScheduleController(BaseTestCase):
    """ScheduleController integration test stubs"""

    def test_get_schedule(self):
        """Test case for get_schedule

        get user schedules
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/v0/schedule/{schedule_id}'.format(schedule_id='schedule_id_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_new_scheudle(self):
        """Test case for new_scheudle

        create new schedule
        """
        schedule = {"start":"2000-01-23T04:56:07.000+00:00","description":"description","end":"2000-01-23T04:56:07.000+00:00","title":"title","uuid":"uuid","userId":"userId"}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/v0/schedule',
            method='POST',
            headers=headers,
            data=json.dumps(schedule),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_patch_schedule(self):
        """Test case for patch_schedule

        get user schedules
        """
        schedule = {"start":"2000-01-23T04:56:07.000+00:00","description":"description","end":"2000-01-23T04:56:07.000+00:00","title":"title","uuid":"uuid","userId":"userId"}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/v0/schedule/{schedule_id}'.format(schedule_id='schedule_id_example'),
            method='PATCH',
            headers=headers,
            data=json.dumps(schedule),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
