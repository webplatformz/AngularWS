describe('angularws', function () {
    var scope,
        controller;
    beforeEach(function () {
        module('angularws');
    });
    describe('injectionController', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('injectionController', {
                '$scope': scope
            });
        }));
        it('sets the name', function () {
            expect(scope.greeting).toBe('Hello World');
        });
    });
});