const frogs = [
    {
        name: 'bobTheFrog',
        age: 2,
        gender: 'male',
        favoriteFood: 'fly',
        weight: 5,
    },
    {
        name: 'lisaTheFrog',
        age: 3,
        gender: 'female',
        favoriteFood: 'fly',
        weight: 1,
    },
    {
        name: 'sallyTheFrog',
        age: 10,
        gender: 'female',
        favoriteFood: 'caterpillar',
        weight: 20,
    },
    {
        name: 'mikeTheFrog',
        age: 1,
        gender: 'male',
        favoriteFood: 'worm',
        weight: 8,
    },
    {
        name: 'georgeTheFrog',
        age: 7,
        gender: 'male',
        favoriteFood: 'fly',
        weight: 28,
    },
    {
        name: 'kellyTheFrog',
        age: 3,
        gender: 'female',
        favoriteFood: 'ladybug',
        weight: 3,
    },
]

function createFilters() {
    const _filters = {
        ids: [],
        fns: {},
    }

    return {
        addFilter(name, fn) {
            _filters.ids.push(name)
            _filters.fns[name] = fn
        },
        removeFilter(name) {
            const index = _filters.ids.indexOf(name)
            if (index !== -1) _filters.ids.splice(index, 1)
            delete _filters.fns[name]
        },
        filter(arr) {
            return arr.reduce((acc, item) => {
                for (let index = 0; index < _filters.ids.length; index++) {
                    const id = _filters.ids[index]
                    const filter = _filters.fns[id]
                    if (!filter(item)) {
                        return acc
                    }
                }
                return acc.concat(item)
            }, [])
        },
    }
}

const filterHelper = createFilters()

filterHelper.addFilter('fat-frogs', (frog) => {
    return frog.weight >= 8
})

filterHelper.addFilter('male-frogs', (frog) => {
    return frog.gender === 'male'
})

const filteredMaleFatFrogs = filterHelper.filter(frogs)

console.log('Fat male frogs', filteredMaleFatFrogs.length, filteredMaleFatFrogs)

filterHelper.removeFilter('male-frogs')

const filteredFatFrogs = filterHelper.filter(frogs)

console.log('Fat frogs', filteredFatFrogs.length, filteredFatFrogs)

/*
const filteredFrogs = frogs
  .filter((frog) => {
    return frog.weight >= 8
  })
  .filter((frog) => {
    return frog.gender === 'male'
  })
  .filter((frog) => {
    return frog.name.startsWith('b')
  })
 */