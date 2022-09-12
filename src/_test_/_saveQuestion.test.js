import { _saveQuestion } from "../utils/_DATA";

describe('saveQuestion', () => {
    it('will resolve if two options are available as well as author', async() => {

        const question = {
            optionOneText: 'optionOneText',
            optionTwoText: 'optionTwoText',
            author: 'author'
        }
        const result = await _saveQuestion(question);
        expect(typeof result).toBe('object');
    });

    it('will return an error if the question is not found', async() => {
        const optionOneText = 'Invalid answer';
        await expect(_saveQuestion(optionOneText)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});
