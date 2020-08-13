const enhancer = require('./enhancer.js');
const item = require("./items");
// test away!

describe("enhancer code", () => {
    describe("repair function", () => {
        it("can repair item up to 100 durability", () => {
            let expectedDurability = 100;
            let actualDurability = enhancer.repair(item.dagger)
            expect(actualDurability.durability).toBe(expectedDurability);
        })
    })
})

describe("succeed code", () => {
    it("can increase Enhancement level by 1", () => {
        let expectedEnhancement = 11;
        let actualEnhancement = enhancer.success(item.sword)
        expect(actualEnhancement.enhancement).toBe(expectedEnhancement);
    })

    it("will return item unchanged if it is already at level 20 Enhancement", () => {
        let expectedEnhancement = 20;
        let actualEnhancement = enhancer.success(item.axe)
        expect(actualEnhancement.enhancement).toBe(expectedEnhancement);
    })
})

describe("failure code", () => {
    describe("failure function", () => {
        it("can reduce the Durability by 5", () => {
            let expectedDurability = 35;
            let actualDurability = enhancer.fail(item.sword)
            expect(actualDurability.durability).toBe(expectedDurability);
        })
        it("can reduce the Durability by 10", () => {
            let expectedDurability = 80;
            let actualDurability = enhancer.fail(item.axe)
            expect(actualDurability.durability).toBe(expectedDurability);
        })
        it("can reduce the Enhancement by 1", () => {
            let expectedEnhancement = 17;
            let actualEnhancement = enhancer.fail(item.dagger)
            expect(actualEnhancement.enhancement).toBe(expectedEnhancement);
        })


    })
})