import { Oval } from 'react-loader-spinner';

export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#050709] px-4">
            <Oval color="#fff" secondaryColor="#ddd" />
            <p className="text-lg text-white">Starting service on Render</p>
        </div>
    );
}
