import React, { useEffect } from 'react';
import {
    registerUser,
    getJwtToken,
    getUserSchedules,
    getUserTasks,
    getUserTodo,
    createTask,
    getTask,
    updateTask,
    createSchedule,
    updateSchedule,
    getSchedule,
} from '../utils/api'; // このインポートパスは、apiファイルの実際のパスに合わせて修正してください

function Test() {
    useEffect(() => {
        // ユーザー登録
        registerUser('JohnDoe', 'johndoe123', 'password123');

        // // JWTトークンの取得
        // getJwtToken('johndoe123', 'password123');

        // // ユーザーのスケジュール取得
        // getUserSchedules('YOUR_USER_ID_HERE');

        // // ユーザーのタスク取得
        // getUserTasks('YOUR_USER_ID_HERE');

        // // ユーザーのToDo取得
        // getUserTodo('YOUR_USER_ID_HERE');

        // // タスクの作成
        // createTask(
        //     'userId',
        //     'title',
        //     'type',
        //     'start',
        //     'end',
        //     'deadline',
        //     'est',
        //     'actualTime',
        //     'description',
        //     'done',
        //     'color'
        // );

        // // タスクの取得
        // getTask('YOUR_TASK_ID_HERE');

        // // タスクの更新
        // updateTask(
        //     'taskId',
        //     'userId',
        //     'title',
        //     'type',
        //     'start',
        //     'end',
        //     'deadline',
        //     'est',
        //     'actualTime',
        //     'description',
        //     'done',
        //     'color'
        // );

        // // スケジュールの作成
        // createSchedule(
        //     'userId',
        //     'title',
        //     'start',
        //     'end',
        //     'description',
        //     'color'
        // );

        // // スケジュールの更新
        // updateSchedule(
        //     'scheduleId',
        //     'userId',
        //     'title',
        //     'start',
        //     'end',
        //     'description',
        //     'color'
        // );

        // // スケジュールの取得
        // getSchedule('scheduleId');
    }, []);

    return (
        <div>
        <h1>これはAPIのテスト用ページです</h1>
        {/* ここにテスト結果を表示するコンポーネントを追加 */}
        </div>
    );
}

export default Test;
