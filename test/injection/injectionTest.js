xdescribe('angularws', function () {
    var scope,
        controller;
    beforeEach(function () {
        module('angularws.injection');
    });
    describe('injectionController', function () {
        beforeEach(inject(function ($rootScope, $controller, injectionService) {
            scope = $rootScope.$new();

            controller = $controller('injectionController', {
                '$scope': scope,
                'injectionService': injectionService
            });
        }));
        it('should set greeting and name', function () {
            expect(scope.greeting).toBe('Hello');
            expect(scope.name.firstname).toBe('Keyser');
            expect(scope.name.lastname).toBe('Soze');
        });
    });
});