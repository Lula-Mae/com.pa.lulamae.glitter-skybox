try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Glitter by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.glitter-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}