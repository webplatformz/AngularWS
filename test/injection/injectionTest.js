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
            expect(scope.greeting).toBe('Hello everybody');
            expect(scope.name).toBe('Keyser Söze');
        });
        it('should set birthdate and default setting', function () {
            expect(scope.showAnswer).toBe(false);
            expect(scope.year).toBe('1995');
        });
    });
});