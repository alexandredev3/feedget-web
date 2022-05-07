import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

const feedbackRepositorySpy = jest.fn();
const mailAdapterSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: feedbackRepositorySpy },
  { sendMail: mailAdapterSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "Bug Feedback Type",
        screenshot: "data:image/png;base64,iVBORw0KGgoAA",
      })
    ).resolves.not.toThrow();

    expect(feedbackRepositorySpy).toBeCalled();
    expect(mailAdapterSpy).toBeCalled();
  });

  it("should throw an error if an invalid screenshot format is passed", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "Bug Feedback Type",
        screenshot: "foo.png",
      })
    ).rejects.toThrow();

    expect(feedbackRepositorySpy).not.toBeCalled();
    expect(mailAdapterSpy).not.toBeCalled();
  });

  it("should throw an error if type is missing", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "Comment test",
        screenshot: "foo.png",
      })
    ).rejects.toThrow();

    expect(feedbackRepositorySpy).not.toBeCalled();
    expect(mailAdapterSpy).not.toBeCalled();
  });

  it("should throw an error if comment is missing", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "foo.png",
      })
    ).rejects.toThrow();

    expect(feedbackRepositorySpy).not.toBeCalled();
    expect(mailAdapterSpy).not.toBeCalled();
  });
});
