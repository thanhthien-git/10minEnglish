export default function ClientDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-2">Filtro de dúvidas</h3>
          <div className="space-y-3">
            <input
              className="w-full p-3 rounded-lg border"
              placeholder="Livro"
            />
            <input
              className="w-full p-3 rounded-lg border"
              placeholder="Assunto"
            />
            <input
              className="w-full p-3 rounded-lg border"
              placeholder="Contexto"
            />
            <input
              className="w-full p-3 rounded-lg border"
              placeholder="Habilidade Linguística"
            />
            <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg">
              Iniciar 
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  S
                </div>
                <div>
                  <div className="font-semibold">QuickLangua</div>
                  <div className="text-sm text-gray-500">Online</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-2 rounded-md hover:bg-gray-100">🔍</button>
                <button className="p-2 rounded-md hover:bg-gray-100">🗑</button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50">
                  <div className="text-sm text-gray-600">QuickLangua</div>
                  <p className="mt-2 text-gray-800">
                    Olá! Bem-vindo à seção...
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200">D</div>
                  <div>
                    <div className="text-sm text-gray-600">Danielle</div>
                    <p className="mt-1">
                      Como usar corretamente o Presente Simples...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-3">
              <textarea
                className="flex-1 p-3 rounded-lg border resize-none"
                rows={3}
                placeholder="Escreva aqui..."
              />
              <button className="bg-orange-500 text-white px-4 py-3 rounded-lg">
                ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
