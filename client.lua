-- Command to display the UI to the screen.
RegisterCommand('nui-show', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = 'toggleUI',
        show = true
    })
end, false)

-- Press Escape and this will hide the UI.
RegisterNUICallback('hideUI', function()
    SetNuiFocus(false, false)
end, false)