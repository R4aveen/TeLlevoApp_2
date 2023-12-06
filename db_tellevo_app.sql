-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2023 a las 02:42:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tellevo_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chofer`
--

CREATE TABLE `chofer` (
  `id_chofer` int(11) NOT NULL,
  `nombre_chofer` varchar(100) NOT NULL,
  `apellido_chofer` varchar(100) NOT NULL,
  `usuario_chofer` varchar(100) NOT NULL,
  `pass_chofer` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `telefono` int(11) NOT NULL,
  `patente` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chofer`
--

INSERT INTO `chofer` (`id_chofer`, `nombre_chofer`, `apellido_chofer`, `usuario_chofer`, `pass_chofer`, `direccion`, `correo`, `telefono`, `patente`) VALUES
(1, 'Omar', 'Donoso', 'Omaroso', '1234', 'Casabacan 123', 'Omaroso@duocuc.cl', 920364758, 'BKWK91');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorito`
--

CREATE TABLE `favorito` (
  `id_favorito` int(11) NOT NULL,
  `id_viaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasajero`
--

CREATE TABLE `pasajero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `direccion` varchar(500) NOT NULL,
  `correo` varchar(500) NOT NULL,
  `telefono` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pasajero`
--

INSERT INTO `pasajero` (`id`, `nombre`, `apellido`, `usuario`, `pass`, `direccion`, `correo`, `telefono`) VALUES
(1, 'Jose', 'Maturana', 'Jose123', 'jose123', 'El albañil 1412 Puente alto', 'jose123@gmail.com', '931313838'),
(2, 'Andrea', 'Colon', 'andreacolon1', 'andrea1991', 'concha y toro 1570', 'and.colon@duocuc.cl', '937543621'),
(7, 'daniel', 'de la fuente', 'dani', 'dani111', 'adasdfsedfs', 'dan.delafuente@duocuc.cl', '921313131'),
(8, 'javier', 'donoso', 'javieroso', 'javoso', 'casa123, la florida', 'javioso@gmail.com', '947547391');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viaje`
--

CREATE TABLE `viaje` (
  `id_viaje` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `id_pasajero` int(11) NOT NULL,
  `id_chofer` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_termino` time NOT NULL,
  `calificacion` int(11) NOT NULL,
  `desde_long` float NOT NULL,
  `desde_lat` float NOT NULL,
  `hasta_long` float NOT NULL,
  `hasta_lat` float NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viaje`
--

INSERT INTO `viaje` (`id_viaje`, `fecha`, `id_pasajero`, `id_chofer`, `costo`, `hora_inicio`, `hora_termino`, `calificacion`, `desde_long`, `desde_lat`, `hasta_long`, `hasta_lat`, `activo`) VALUES
(1, '2020-12-22', 1, 1, 5000, '12:40:00', '13:10:00', 5, 123, 123, 123, 123, 0),
(2, '2023-11-30', 0, 1, 2500, '17:30:00', '18:10:00', 5, 123, 123, 123, 123, 1),
(3, '2023-11-30', 0, 1, 2500, '17:30:00', '18:10:00', 5, 123, 123, 123, 123, 1),
(4, '2023-12-01', 0, 1, 1500, '11:14:00', '11:30:00', 5, 123, 123, 13, 13, 1),
(5, '2023-12-01', 0, 1, 1500, '11:14:00', '11:30:00', 5, 123, 123, 13, 13, 1),
(6, '2023-11-28', 0, 1, 100, '11:29:00', '17:35:00', 3, 100, 100, 100, 110, 1),
(7, '2023-12-01', 0, 1, 1, '11:31:00', '11:31:00', 5, 100, 100, 100, 100, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viaje_pasajeros`
--

CREATE TABLE `viaje_pasajeros` (
  `id` int(11) NOT NULL,
  `viaje_id` int(11) DEFAULT NULL,
  `pasajero_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viaje_pasajeros`
--

INSERT INTO `viaje_pasajeros` (`id`, `viaje_id`, `pasajero_id`) VALUES
(1, 2, 2),
(2, 3, 2),
(3, 4, 1),
(4, 5, 1),
(5, 6, 8),
(6, 6, 2),
(7, 6, 7),
(8, 7, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chofer`
--
ALTER TABLE `chofer`
  ADD PRIMARY KEY (`id_chofer`);

--
-- Indices de la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`id_favorito`),
  ADD KEY `id_viaje` (`id_viaje`);

--
-- Indices de la tabla `pasajero`
--
ALTER TABLE `pasajero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `viaje`
--
ALTER TABLE `viaje`
  ADD PRIMARY KEY (`id_viaje`),
  ADD KEY `id_pasajero` (`id_pasajero`),
  ADD KEY `id_chofer` (`id_chofer`);

--
-- Indices de la tabla `viaje_pasajeros`
--
ALTER TABLE `viaje_pasajeros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `viaje_id` (`viaje_id`),
  ADD KEY `pasajero_id` (`pasajero_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chofer`
--
ALTER TABLE `chofer`
  MODIFY `id_chofer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `favorito`
--
ALTER TABLE `favorito`
  MODIFY `id_favorito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pasajero`
--
ALTER TABLE `pasajero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `viaje`
--
ALTER TABLE `viaje`
  MODIFY `id_viaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `viaje_pasajeros`
--
ALTER TABLE `viaje_pasajeros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `id_viaje` FOREIGN KEY (`id_viaje`) REFERENCES `viaje` (`id_viaje`);

--
-- Filtros para la tabla `viaje`
--
ALTER TABLE `viaje`
  ADD CONSTRAINT `id_chofer` FOREIGN KEY (`id_chofer`) REFERENCES `chofer` (`id_chofer`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `viaje_pasajeros`
--
ALTER TABLE `viaje_pasajeros`
  ADD CONSTRAINT `viaje_pasajeros_ibfk_1` FOREIGN KEY (`viaje_id`) REFERENCES `viaje` (`id_viaje`),
  ADD CONSTRAINT `viaje_pasajeros_ibfk_2` FOREIGN KEY (`pasajero_id`) REFERENCES `pasajero` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
