import { Image } from '@heroui/react';
import { BookOpenText, SendIcon } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <Image
            src={chrome.runtime.getURL('assets/icon.png')}
            alt="logo"
            className="mr-2 w-8 h-8 rounded-full"
          />
          <a
            href="https://multipost.app"
            target="_blank"
            className="hover:text-blue-600">
            <h1 className="text-lg font-semibold">{chrome.i18n.getMessage('optionsTitle')}</h1>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://multipost.app/publish"
            target="_blank"
            className="flex items-center px-3 py-1 text-green-600 bg-green-100 rounded-full hover:bg-green-200">
            <SendIcon
              size={16}
              className="mr-1"
            />
            <span className="text-sm">{chrome.i18n.getMessage('optionViewHomePagePublish')}</span>
          </a>
          <a
            href="https://multipost.app"
            target="_blank"
            className="flex items-center px-3 py-1 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200">
            <BookOpenText
              size={16}
              className="mr-1"
            />
            <span className="text-sm">{chrome.i18n.getMessage('optionsViewDocs')}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
