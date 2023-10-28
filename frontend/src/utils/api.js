import axios from 'axios';

// const axios = require('axios');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        // 'Authorization': 'Bearer hogehoge',
        'Content-Type': 'application/json',
    }
});

// passwordのハッシュ化っていつやりましょう
// userの配列じゃなくてuser単体を渡す
export const registerUser = async (nickname, id, password) => {
    const user = {
        nickname: nickname,
        id: id,
        password: password,
    }

    try {
        const res = await api.post(`/user`, user);
        console.log(res);
        return res.data;
    } catch (error) {
        alert(error.toString());
    }
}

// JWTトークンを取得
export const getJwtToken = async (id, password) => {
    const jwtTokenData = {
        id: id,
        password: password,
    }

    try {
        const res = await api.post('/auth', jwtTokenData);
        console.log(res);
        return res.data;
    } catch (error) {
        alert(error.toString());
    }
}

export const getUserSchedules = async (userId) => {
    try {
        const res = await api.post(`/user/${userId}/schedules`);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const getUserTasks = async (userId) => {
    try {
        const res = await api.post(`/user/${userId}/tasks`);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const getUserTodo = async (userId) => {
    try {
        const res = await api.post(`/user/${userId}/todo`);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}


export const createTask = async (userId, title, type, start, end, deadline, est, actualTime, description, done, color) => {
    const task = {
        userId: userId,
        title: title,
        type: type,
        start: start,
        end: end,
        deadline: deadline,
        est: est,
        actualTime: actualTime,
        description: description,
        done: done,
        color: color
    }

    try {
        const res = await api.post('/task' + task);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const getTask = async (taskId) => {
    try {
        const res = await api.post(`/task/${taskId}`);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const updateTask = async (taskId, userId, title, type, start, end, deadline, est, actualTime, description, done, color) => {
    const task = {
        userId: userId,
        title: title,
        type: type,
        start: start,
        end: end,
        deadline: deadline,
        est: est,
        actualTime: actualTime,
        description: description,
        done: done,
        color: color
    }

    try {
        const res = await api.post(`/task/${taskId}`, task);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const createSchedule = async (userId, title, start, end, description, color) => {
    const schedule = {
        userId: userId,
        title: title,
        start: start,
        end: end,
        description: description,
        color: color
    }

    try {
        const res = await api.post('/schedule', schedule);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const updateSchedule = async (scheduleId, userId, title, start, end, description, color) => {
    const schedule = {
        userId: userId,
        title: title,
        start: start,
        end: end,
        description: description,
        color: color
    }

    try {
        const res = await api.post(`/schedule/${scheduleId}`, schedule);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}

export const getSchedule = async (scheduleId) => {
    try {
        const res = await api.post(`/schedule/${scheduleId}`);
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.toString());
    }
}
