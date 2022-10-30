import {createSettings, findSettingsByKey} from "@dracul/settings-backend";


const settings = [
    {
        key: 'sample',
        value: '',
        type: 'string', //string, number, boolean, enum
        label: {en: 'Sample', es: 'Ejemplo', pt: 'Ejemplo'}
    },
]

export const initSettings = async function () {

    for (let i in settings) {
        let setting = await findSettingsByKey(settings[i].key)
        if (!setting) {
            await createSettings(null, settings[i])
        }
    }


}
