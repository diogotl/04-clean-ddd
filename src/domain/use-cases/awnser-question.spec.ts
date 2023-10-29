import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./awnser-question";

test("create an awnser", () => {

    const awnserQuestion = new AnswerQuestionUseCase();

    const answer = awnserQuestion.execute({
        questionId: "1",
        instructorId: "1",
        content: "new awnser"
    });

    expect(answer.content).toEqual("new awnser");
});