import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const testMap = new CustomMap('map');

const user = new User();

testMap.addUserMarker(user);

