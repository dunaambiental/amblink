{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red12\green12\blue12;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c5098\c5098\c5098;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function showModal(modalId) \{\
    document.getElementById(modalId).style.display = 'block';\
\}\
\
function closeModal(modalId) \{\
    document.getElementById(modalId).style.display = 'none';\
\}\
\
document.getElementById('formCadastroCliente').addEventListener('submit', function(event) \{\
    event.preventDefault();\
    // Aqui voc\'ea capturaria os dados do formul\'e1rio e os enviaria para o servidor\
    // Por exemplo, usando fetch API ou XMLHttpRequest\
    closeModal('modalCadastroCliente');\
    alert('Cliente cadastrado com sucesso!');\
    // Atualize a lista de clientes conforme necess\'e1rio\
\});\
\
document.getElementById('formCadastroEmpreendimento').addEventListener('submit', function(event) \{\
    event.preventDefault();\
    // Semelhante ao cadastro de cliente, envie os dados para o servidor\
    closeModal('modalCadastroEmpreendimento');\
    alert('Empreendimento cadastrado com sucesso!');\
    // Atualize a lista de empreendimentos conforme necess\'e1rio\
\});\
}
