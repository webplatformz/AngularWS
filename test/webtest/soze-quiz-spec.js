describe('keyser soze quiz', function () {
    it('should show and hide the correct answer', function () {
        browser.get('http://localhost:3000');

        var hideAnswerButton = element(by.buttonText('Hide Answer'));
        var correctAnswerButton = element(by.buttonText('1995'));

        expect(hideAnswerButton.isPresent()).toBe(false);
        correctAnswerButton.click();
        expect(hideAnswerButton.isPresent()).toBe(true);
        hideAnswerButton.click();
        expect(hideAnswerButton.isPresent()).toBe(false);
    });
});