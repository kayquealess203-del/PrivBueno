import Experience from '../experience';
export default async function Page({params}:{params:Promise<{path:string[]}>}){const {path}=await params;return <Experience route={'/'+path.join('/')}/>}
