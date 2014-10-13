/**
 *
 * site
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

exports.index = function (req, res, next) {

  res.render('index', { title: "Riki" });

};