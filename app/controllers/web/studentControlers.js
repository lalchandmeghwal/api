import schoolModel from "../../model/schoolModel.js";


const studentList = async (req, res) => {

    const data = await schoolModel.find();

    res.send({
        status: 1,
        smg: 'Student List',
        data
    });
};

const studentInsert = (req, res) => {

    const { name, email, phone, msg } = req.body;

    const studentInsert = schoolModel({ name, email, phone, msg });

    studentInsert.save().then(() => {
        res.send({
            status: 1,
            smg: 'Data Save Successfully',
            data: studentInsert,
        });
    }).catch(err => {
        res.send({
            status: 0,
            msg: "Data Sava Not Successfully",
            errror: err
        });
    });

};

const studnetUpdate = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, msg } = req.body;
    const updateData = { name, email, phone, msg, }

    const update = await schoolModel.updateOne({ _id: id }, updateData);

    res.send({
        status: 1,
        msg: 'Data update Successfully',
        update,

    })
};

const studnetDelete = async (req, res) => {
    const id = req.params.id;

    const deleteResponse = await schoolModel.deleteOne({ _id: id });

    res.send({
        status: 1,
        msg: 'Data Delete Successfully',
        delete: deleteResponse,

    });
};


export { studentList, studentInsert, studnetUpdate, studnetDelete };