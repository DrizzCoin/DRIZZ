import React from 'react';
import { Dialog } from '@headlessui/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
      <div className="fixed inset-0 bg-black opacity-60" />


        <div className="relative bg-white max-w-3xl w-full mx-auto p-6 rounded-2xl shadow-xl z-10 text-black">
          <Dialog.Title className="text-2xl font-bold mb-4">About DRIZZ</Dialog.Title>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why DRIZZ Was Created</h2>
            <p>
              DRIZZ was born out of the absurdity of our political reality, the chaotic rise of memecoins,
              and the power of Web3 to flip the script. Instead of chasing vaporware promises, we built something
              meaningful — and hilarious. At the same time, Web3 and blockchain offer real tools for change:
              decentralization, transparency, and community ownership.
            </p>
            <p className="mt-2">
              DRIZZ combines both worlds. It's a satirical memecoin built with purpose — using humor
              to expose dysfunction while empowering a community through token-based access, comic
              storytelling, and real-time commentary. In a sea of senseless memecoins, DRIZZ is the
              meme that <em>actually makes sense</em>.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Who’s Behind DRIZZ</h2>
            <p>
              The creator of DRIZZ is an experienced systems engineer and developer who’s spent years in tech,
              believes in accountability, and saw an opportunity to fuse satire, economic empowerment, and
              storytelling into a single mission. The identity doesn’t matter — the message does.
            </p>
            <p className="mt-2">
              DRIZZ is a way of punching up — using code, comics, and community to call out
              corruption, idiocy, and the broken incentives of our current systems.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Build a decentralized satirical universe powered by Web3.</li>
              <li>Use memes, humor, and storytelling to expose broken systems.</li>
              <li>Create a tokenized community that rewards truth-telling and laughter.</li>
              <li>Turn passive frustration into active engagement — through comics, governance, and creativity.</li>
              <li>Bridge political satire and crypto utility in one shared cultural movement.</li>
            </ul>
            <p className="mt-4 font-semibold italic">If we don’t laugh, we’ll cry — DRIZZ gives us both.</p>
          </section>

          <p className="mt-6 text-center text-lg font-medium italic">
            So without further ado, it’s time to...
          </p>

          <div className="mt-4 flex justify-center">
            <img
              src="/images/ride-a-memecoin.png"
              alt="Save a Horse and Ride a Memecoin"
              className="rounded-xl shadow-md max-w-full h-auto"
            />
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AboutModal;
