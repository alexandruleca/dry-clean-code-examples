function createMyHigherOrderFunction(options) {
    const state = { ...options } // Our local state object
    return function(...args) {
        return function(callback) {
            return callback(state, ...args)
        }
    }
}

const prepare = createMyHigherOrderFunction({
    name: 'bobby',
    favoriteFood: 'steak',
})
const prepareWithArgs = prepare({ country: 'United States' })
const finalize = prepareWithArgs((state, options) => ({ ...state, ...options }))

console.log(finalize)