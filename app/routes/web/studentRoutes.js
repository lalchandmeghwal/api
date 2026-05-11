import express from 'express';
import { studentList, studentInsert, studnetUpdate, studnetDelete } from '../../controllers/web/studentControlers.js';

const studnetRouters = express.Router();


studnetRouters.get('/student-list', studentList);
studnetRouters.post('/student-insert', studentInsert);
studnetRouters.put('/studnet-update/:id', studnetUpdate);
studnetRouters.delete('/studnet-delete/:id', studnetDelete);
studnetRouters.get('/', (req, res) => {
    res.send({
        status: 1,
        mgs:'Server is runing '
    })
})

export default studnetRouters;