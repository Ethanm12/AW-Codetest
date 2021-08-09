import axios from 'axios';

interface CharacterModel {
    name: string;
    luck: string;
    hitPoints: string;
    equipment: Array<EquipmentModel>;
    wealth: number;
}

interface EquipmentModel {
    id: number;
    name: string;
    type: 'Trinket' | 'Weapon' | 'Armour' ;
    hpModifier: number;
    luckModifier: number;
    value: number;
}
interface PostPayload {
    equipmentId: string;
}


async function getCharacter(): Promise<CharacterModel> {
    const url = 'http://localhost:5000/character';
    const resp = await axios.get<CharacterModel>(url);
    return resp.data;
}

async function getEquipment(): Promise<EquipmentModel[]> {
    const url = 'http://localhost:5000/equipment';
    const resp = await axios.get<EquipmentModel[]>(url);
    return resp.data; 
}

async function postItems(payload: PostPayload): Promise<EquipmentModel> {
    const url = 'http://localhost:5000/purchases';
    const resp = await axios.post<EquipmentModel>((url),payload);
    return resp.data; 
}

export { CharacterModel, EquipmentModel, getCharacter, getEquipment, postItems }
