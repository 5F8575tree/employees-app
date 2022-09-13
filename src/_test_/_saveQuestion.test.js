import { _saveQuestion } from "../utils/_DATA";

describe('saveQuestion', () => {
    it('will return an object', async() => {

        const question = {
            optionOneText: 'optionOneText',
            optionTwoText: 'optionTwoText',
            author: 'author'
        }
        const result = await _saveQuestion(question);
        expect(typeof result).toBe('object');
    });

    it('will return an object with the correct properties', async() => {

        const question = {
            optionOneText: 'optionOneText',
            optionTwoText: 'optionTwoText',
            author: 'author'
        }
        const result = await _saveQuestion(question);
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('author');
        expect(result).toHaveProperty('optionOne');
        expect(result).toHaveProperty('optionTwo');
      });

    it('will return an error if the provided answer is invalid', async() => {
        const optionOneText = 'Invalid answer';
        await expect(_saveQuestion(optionOneText)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});
