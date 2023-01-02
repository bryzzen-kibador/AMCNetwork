// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({output: `mekanism:digital_miner`})
    event.remove({output: `botania:exchange_rod`})
    event.remove({output: `mekanism:cardboard_box`})
    event.remove({output: `immersiveengineering:cloche`})
    event.shaped(`1x immersiveengineering:cloche`, ['AAA', 'AFA', 'SDS'], {
        A: `botania:elf_glass`,
        S: `twilightforest:darkwood_logs`,
        D: `mysticalagriculture:supremium_farmland`,
        F: `mekanism:energy_tablet`
    })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})