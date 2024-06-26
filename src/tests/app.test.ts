import request from 'supertest';
import app from '../app';

describe('GET /', () => {
    it('should return Hello Dev', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello Dev!');
    })
})