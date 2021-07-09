const user_data = require('../model/user_model')();
const common = require('../common');

exports.DisplayData = async (req, res) => {

    const user_data_result = await user_data.find();
    user_data_result.length ? res.send(user_data_result) : res.send({ message: "No data available to display" });
};

exports.InsertData = async (req, res) => {

    const EncryptedPsd = await common.EncryptPsd(req.body.password);

    const insert = new user_data({
        name: req.body.name,
        email: req.body.email,
        password: EncryptedPsd
    });

    const data = await insert.save();
    data ? res.send({ message: "data has been inserted", data }) : res.send("error in inserting a data");

};

exports.UpdateData = async (req, res) => {
    const id = req.params.id;
    const EncryptedPsd = await common.EncryptPsd(req.body.password);
    const updated_result = await user_data.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        password: EncryptedPsd
    }, { new: true });

    res.send({ message: 'data has been updateded', "new updated data": updated_result });

};

exports.DeleteById = async (req, res) => {

    const id = req.params.id;

    const deleted_data = await user_data.findByIdAndDelete(id);

    res.send({ message: 'data has been deleted sucessfully!', "deleted data": deleted_data });

};

exports.DeleteAllData = async (req, res) => {

    const delete_all_data_result = await user_data.deleteMany();

    const sucess_string = delete_all_data_result.deletedCount
        ? `${delete_all_data_result.deletedCount} collection(s) data has been deleted!`
        : `No data found to delete!`

    res.send({ message: sucess_string });

};