// module.exports = {
//     index: (req, res) => {
//         res.render('classes/index')
//     }


const Classes = require('../models/classes');

const classesController = {};

classesController.index = (req,res) => {
    Classes.findAll()
        .then(classes => {

        res.render('classes/index', { classes });
    })
.catch(err => {
        res.status(500).json(err);
    });

};

classesController.show = (req, res) => {
    Classes.findById(req.params.id)
        .then(classData => {
            res.render('classes/show', { classData })
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

classesController.edit = (req, res) => {
    Classes.findById(req.params.id)
        .then(classData => {
            res.render ('classes/edit', { classData })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

classesController.new = (req, res) => {
    res.render('classes/new')
};

classesController.update = (req, res) => {

    Classes.update({
        id: req.params.id,
        name: req.body.name,
        instructor: req.body.instructor,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    }, req.params.id)
        .then(() => {
            res.redirect(`/classes/${req.params.id}`)
        })
        .catch(err => {
            res.status(500).json(err);
        });

};

classesController.create = (req, res) => {

    console.log('Create Classes');

    Classes.create({
        name: req.body.name,
        instructor: req.body.instructor,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    })
        .then(classData => {
            res.redirect(`/classes/${classData.id}`)
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

classesController.destroy = (req, res) => {
    Classes.destroy(req.params.id)
        .then(() => {
            res.redirect('/classes')
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};
module.exports = classesController;
