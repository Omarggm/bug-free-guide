const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    res.render('homepage', {
        title: 'Bikini Bottom Booking Bonanza!!!'})}
    catch (err) {
        res.status(500).json(err);
    }
});
// loggedIn: req.session.loggedIn
router.get('/krustykrab', async (req, res) => {
    try {
    const menuItems = [];
    res.render('krustykrab', {
        title: 'Krusty Krab',
        menuItems: menuItems,
    })
}
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chumbucket', async (req, res) => {
    try {
        const menuItems = [];
    res.render('chumbucket', {
        title: 'Chum Bucket',
        menuItems: menuItems,
    })}
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/checkout', async (req, res) => {
    try {
    res.render('checkout', {
        title: 'Checkout'
    })}
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
