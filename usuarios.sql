

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(35) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `senha` varchar(120) NOT NULL,
  `senha_original` varchar(20) NOT NULL,
  `nivel` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `usuario`, `senha`, `senha_original`, `nivel`) VALUES
(23, 'Bill Gates', 'billgates@gmail.com', '4297f44b13955235245b2497399d7a93', '123123', ''),
(24, 'Raisa Eça de Queiroz', 'raisa@gmail.com', '7cf110433f70105752f544e92523dde3', 'raisa123', ''),
(25, 'Lais Nehme', 'lais@gmail.com', '4297f44b13955235245b2497399d7a93', '123123', ''),
(26, 'Muriel Carvalho', 'muriel@gmail.com', '63af43dfdc8ae8c025a6bca35de2db5c', 'muriel', ''),
(27, 'Rodrigo Monteiro de LIma', 'rodrigo.lima@gmail.com', '202cb962ac59075b964b07152d234b70', '123', '');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;