# Sistema de pedidos de cafetería

Este proyecto simula el flujo de pedidos de una cafetería usando JavaScript puro, Promesas y async/await.

## Descripción

El programa realiza el siguiente proceso:

1. Recibe un pedido.
2. Verifica si el producto está en el menú.
3. Espera 3 segundos para simular la recepción del pedido.
4. Prepara el café.
5. Espera otros 3 segundos para simular la preparación.
6. Entrega el pedido si todo sale bien.
7. Muestra un error si el producto no existe o si la máquina falla.

## Menú disponible

Los productos disponibles son:

- espresso
- cappuccino
- latte
- americano

## Requisitos

Para ejecutar este proyecto necesitas tener instalado:

- Node.js

Puedes verificar si tienes Node.js instalado ejecutando:

```bash
node -v
Archivos del proyecto
cafeteria-promesas/
│
├── cafeteria.js
└── README.md
Cómo ejecutar el proyecto
Abre una terminal.
Entra a la carpeta del proyecto:
cd cafeteria-promesas
Ejecuta el archivo JavaScript:
node cafeteria.js
Ejemplo de uso

En el archivo cafeteria.js, puedes probar con:

procesarPedido("latte");

Si todo sale bien, después de aproximadamente 6 segundos verás algo como:

Pedido recibido: latte
Entregado:  Café listo: latte

También puede aparecer este error, ya que la máquina tiene un 20% de probabilidad de fallar:

Pedido recibido: latte
 Error: La máquina está rota, no se pudo preparar el café
Probar producto inválido

Para probar un producto que no está en el menú, cambia la última línea del archivo:

procesarPedido("latte");

por:

procesarPedido("mocha");

Luego vuelve a ejecutar:

node cafeteria.js

Deberías ver:

Error: No tenemos mocha en el menú
Tecnologías usadas
JavaScript puro
Promesas
async/await
setTimeout
try/catch
Nota

No se usaron librerías externas. Todo el resultado se muestra por consola.
