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
            expect(scope.greeting).toBe('Hello');
            expect(scope.name.firstName).toBe('Keyser');
            expect(scope.name.lastName).toBe('Soze');
        });
    });
});