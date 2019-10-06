const PathToObjectConverter = require('./PathToObjectConverter');

describe('Testing conversion of paths to object', () => {
	test('Testing paths with lines', () => {
        expect(new PathToObjectConverter([{
            type: 'helperPoint',
            x: 60,
            y: 0
        }, {
            type: 'lineTo',
            x: 120,
            y: 0
        }, {
            type: 'lineTo',
            x: 180,
            y: 60
        }]).getObjects()).toMatchSnapshot();
    })
})

