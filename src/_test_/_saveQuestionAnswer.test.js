import { _saveQuestionAnswer } from "../utils/_DATA";

describe('saveQuestionAnswer', () => {
    it('returns true is returned when correctly formatted data is passed to the function', async() => {
        const authedUser = 'sarahedo';
        const qid = '6ni6ok3ym7mf1p33lnez';
        const answer = 'optionOne';
        const result = await _saveQuestionAnswer({ authedUser, qid, answer });
        expect(result).toBe(true);
    }
    );

    it('returns an error is returned when incorrectly formatted data is passed to the function', async() => {
        const invalidAuthedUser = 718;
        const invalidQid = '6ni6ok3ym7mf1p33lnez';
        const invalidAnswer = 'optionOne';
        await expect(_saveQuestionAnswer({ invalidAuthedUser, invalidQid, invalidAnswer })).rejects.toEqual("Please provide authedUser, qid, and answer");
    }
    );
});
