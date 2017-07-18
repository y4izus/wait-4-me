const Review = require('../models/review');

module.exports = {
  createReviewGet: (req, res, next) => {
    res.render('campaign-create');
  },
  // Pendiente crear vistas de review y guardarlas en la base de datos
  createReviewPost: (req, res, next) => {
    let newReview = new Review({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      city: req.body.city,
      isRespond: false
    });
    newReview.save((err) => {
      if (err) {
        return err;
      } else {
        console.log(newReview);
        return res.redirect("/campaign");
      }
    });
  },

  reviewDelete: (req, res, next) => {
    let id = req.params.id;
    Review.findByIdAndRemove(id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/campaign");
    });
  },

  reviewUpdateGet: (req, res, next) => {
    console.log('Req.Params impreso =>');
    console.log(req.params.id);
    Review.findById(req.params.id, (err, campaign) => {
      if (err) {
        console.log(err);
      }
      res.render('campaignUpdate', {
        title: 'La campaña de Juanito',
        campaign: campaign
      });
    });
  },

  reviewUpdatePost: (req, res, next) => {
    let {
      title,
      price,
      description,
      photoURL
    } = req.body;
    let updates = {
      title,
      price,
      description,
      photoURL
    };
    console.log(updates);
    Review.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/campaign/${result._id}/detail`);
    });
  }
};
