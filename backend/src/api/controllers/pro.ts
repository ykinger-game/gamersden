// import _jwt from 'jsonwebtoken';
// import _bcrypt from 'bcrypt';
// import _moment from 'moment';
// import _logger from '../../utils/logger';
// import _config from '../../config/config';
// import _random from '../../utils/random';
// import _db from '../../models';
// import _sendGrid from '../../clients/sendgrid';
// import _tokensController from './tokens';

// const { users } = _db;
// const oneWeek = _config.authentication.oneWeek;

import proGame from '../../models/proGame';
import jwt_decode from 'jwt-decode';

const test = async (req, res) => {
    try {
        res.status(200).json({
            message: 'All good'
        });
    } catch (error) {
        error.message = `[Test] ${error.message}`;
        console.error(error);
        res.status(500).json({ error: 'Error of some kind' });
    }
};

const games = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt_decode(token);
        console.log(decoded);
        // const token = req.aut;
        const proGames = await proGame.findAll({
            where: {
                userID: decoded.userid,
            }
        });

        console.log(req);

        console.log(proGames);

        res.status(200).json({
            message: proGames,
        });
    } catch (error) {
        error.message = `[user/games] ${error.message}`;
        console.error(error);
        res.status(500).json({ error: 'Error getting games for user' });

    }

};

export default {
    test,
    games
};
