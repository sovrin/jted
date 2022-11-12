import assert from 'assert';
import {verify} from '../src';
import {equals} from './utils';

describe('jted', () => {
    describe('verify', () => {
        const key = 'key';
        const payload = {foo: 'bar'};
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJzaGEyNTYifQ.eyJmb28iOiJiYXIifQ.VpqhmNoRgnbjhN7iv36NXmGJv_JENoF-0csx8astfno';

        it('should return true for correct signature', () => {
            const string = JSON.stringify(payload);
            const actual = verify(string, key, 'sha512', 'AiIRPCjxCjzjeh0IzDbEnUlEUgFYENkFh6bIo9VKMO2lfaqmhDaJ8fNU_hMQVZ7wXtMVmRnihDT9rHhjU7qtGg');

            assert(actual);
        });

        it('should return false for incorrect signature', () => {
            const string = JSON.stringify(payload);
            const actual = verify(string, key, 'sha512', 'foobar');

            assert(!actual);
        });
    });
});
