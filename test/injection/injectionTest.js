describe('angularws-app', function () {
    var scope,
        controller;
    beforeEach(function () {
        module('injection');
    });
    describe('injectionController', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            controller = $controller('injectionController', {
                '$scope': scope
            });
        }));
        it('should set greeting and name', function () {
            expect(scope.introduction.greeting).toBe('Hello everybody');
            expect(scope.introduction.name).toBe('Keyser Söze');
        });
        it('should set birthdate and default setting', function () {
            expect(scope.introduction.showAnswer).toBe(false);
            expect(scope.introduction.year).toBe('1995');
        });
    });
});