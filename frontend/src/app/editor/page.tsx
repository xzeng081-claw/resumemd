'use client';

import { useState } from 'react';
import Editor from '@/components/editor';
import { useEditorStore } from '@/stores';

export default function EditorPage() {
  const { content, title, setContent, setTitle, save, isSaving, lastSaved } = useEditorStore();
  
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSave = async () => {
    await save();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold w-full md:w-96 border-none focus:outline-none focus:ring-0 p-0"
              placeholder="Resume Title"
            />
            <p className="text-sm text-gray-500 mt-1">Edit your resume title</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            
            {lastSaved && (
              <span className="text-sm text-green-600">
                Saved at {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <Editor 
        initialValue={content} 
        onChange={handleContentChange} 
      />
    </div>
  );
}
