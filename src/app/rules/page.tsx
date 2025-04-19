// src/app/rules/page.tsx
export default function RulesPage() {
    return (
      <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
            📜 Server Rules
          </h1>
  
          <p className="text-gray-300 mb-8">
            Please read and follow these rules to ensure a fun and fair roleplay environment for everyone.
          </p>
  
          <ol className="space-y-4 list-decimal list-inside text-lg text-gray-200">
            <li>
              <strong>No Fail RP:</strong> All players must remain in character and roleplay seriously at all times.
            </li>
            <li>
              <strong>No RDM/VDM:</strong> Random Death Match and Vehicle Death Match are strictly prohibited.
            </li>
            <li>
              <strong>Respect Staff:</strong> Staff decisions are final. Disrespect will not be tolerated.
            </li>
            <li>
              <strong>No Exploiting or Hacking:</strong> Any form of cheating will result in a permanent ban.
            </li>
            <li>
              <strong>Use Realistic Names:</strong> Please use realistic and appropriate names for your characters.
            </li>
            <li>
              <strong>Follow Discord Guidelines:</strong> All Discord and Roblox ToS must be followed.
            </li>
            <li>
              <strong>No Spamming:</strong> Avoid spamming text channels, commands, or in game text chat and radios.
            </li>
          </ol>
  
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-4">
              If you have any questions or need clarification, please ask a staff member in our Discord.
            </p>
          </div>
        </div>
      </main>
    );
  }
  